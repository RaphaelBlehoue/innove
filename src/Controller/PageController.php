<?php
/**
 * Created by IntelliJ IDEA.
 * User: raphael
 * Date: 21/05/2018
 * Time: 23:01
 */

namespace App\Controller;


use App\Entity\Activity;
use App\Entity\Category;
use App\Entity\FamilyFormer;
use App\Entity\Post;
use App\Entity\Section;
use App\Entity\Service;
use App\Entity\Solution;
use App\Form\FamilyDevisType;
use App\Form\SolutionDevisType;
use App\Lib\MailManager;
use App\Repository\ActivityRepository;
use App\Repository\CategoryRepository;
use App\Repository\FamilyFormerRepository;
use App\Repository\PartnerRepository;
use App\Repository\PostRepository;
use App\Repository\SectionRepository;
use App\Repository\ServiceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PageController
 * @package App\Controller
 */
class PageController extends AbstractController
{

    /**
     * @Route("/", name="homepage", methods={"GET"}, schemes={"%secure_channel%"})
     * @param ServiceRepository $serviceRepository
     * @param ActivityRepository $activityRepository
     * @param PartnerRepository $partnerRepository
     * @param PostRepository $postRepository
     * @param SectionRepository $sectionRepository
     * @param FamilyFormerRepository $familyFormerRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(ServiceRepository $serviceRepository, ActivityRepository $activityRepository, PartnerRepository $partnerRepository, PostRepository $postRepository, SectionRepository $sectionRepository, FamilyFormerRepository $familyFormerRepository)
    {
       return $this->render('index/index.html.twig',[
           'sections' => $sectionRepository->findAll(),
           'services' => $serviceRepository->findAll(),
           'activities' => $activityRepository->findAll(),
           'partners'  => $partnerRepository->findAll(),
           'posts'     => $postRepository->getPostLimited(3),
           'formers'   => $familyFormerRepository->findAll()
       ]);
    }

    /**
     * @Route("/about-us", name="about", methods={"GET"}, schemes={"%secure_channel%"})
     * @param PartnerRepository $partnerRepository
     * @param ServiceRepository $serviceRepository
     * @param PostRepository $postRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function about(PartnerRepository $partnerRepository, ServiceRepository $serviceRepository, PostRepository $postRepository)
    {
        return $this->render('front/about.html.twig',[
            'partners'  => $partnerRepository->findAll(),
            'services'  => $serviceRepository->findAll(),
            'posts'     => $postRepository->getPostLimited(3)
        ]);
    }

    /**
     * Page pour toutes les solutions
     * @Route("/nos-solutions", name="solutions", methods={"GET"}, schemes={"%secure_channel%"})
     * @param SectionRepository $sectionRepository
     * @param PartnerRepository $partnerRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function solution(SectionRepository $sectionRepository, PartnerRepository $partnerRepository)
    {
        return $this->render('front/solutions.html.twig',[
            'sections' => $sectionRepository->findAll(),
            'partners'  => $partnerRepository->findAll()
        ]);
    }

    /**
     * Page pour Voir la famille des solutions, sous-famille et les solutions associé
     * @Route("/page/family/solutions/{slug}", name="family_solution_page", methods={"GET","POST"}, schemes={"%secure_channel%"})
     * @param Section $section
     * @param SectionRepository $sectionRepository
     * @param $slug
     * @param PartnerRepository $partnerRepository
     * @param CategoryRepository $categoryRepository
     * @param Request $request
     * @param MailManager $mailer
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Twig_Error_Loader
     * @throws \Twig_Error_Runtime
     * @throws \Twig_Error_Syntax
     */
    public function FamilySolutionPage(Section $section, SectionRepository $sectionRepository , $slug, PartnerRepository $partnerRepository, CategoryRepository $categoryRepository, Request $request, MailManager $mailer)
    {
        $categories = $categoryRepository->getAllCategoriesIdBySection($section);
        $categories_array_id = $this->getEntityGivenId($categories);

        $form = $this->createForm(
            FamilyDevisType::class,
            $categories_array_id,
            ['categories' => $categories]
        );

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $mailData = $this->dataDevisConstructor($data);
            dump($mailData); die;
            $template = 'devis';
            $to = getenv('APP_TO');
            $bcc = $mailData['email'];
            $fromName = $mailData['lastname'].' '.$mailData['firstname'];
            $mail = $mailData['email'];
            $mailer->sendEmail($template, $mailData, $to, $mail, $fromName, $bcc);
            $this->flashMessage();
            return $this->redirectToRoute('family_solution_page', ['slug' => $section->getSlug()]);
        }

        return $this->render('front/family_solution_page.html.twig',[
            'form' => $form->createView(),
            'section' => $sectionRepository->getRecursiveData($section),
            'partners'  => $partnerRepository->findAll()
        ]);
    }

    /**
     * @param Solution $solution
     * @param $slug
     * @param PartnerRepository $partnerRepository
     * @param Request $request
     * @param MailManager $mailer
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Twig_Error_Loader
     * @throws \Twig_Error_Runtime
     * @throws \Twig_Error_Syntax
     * @Route("/page/solutions/{slug}", name="solution_detail", methods={"GET","POST"}, schemes={"%secure_channel%"})
     */
    public function solutionDetail(Solution $solution, $slug, PartnerRepository $partnerRepository, Request $request, MailManager $mailer)
    {
        $form = $this->createForm(SolutionDevisType::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $mailData = $this->dataDevisConstructor($data);
            dump($mailData); die;
            $template = 'devis';
            $to = getenv('APP_TO');
            $bcc = $mailData['email'];
            $fromName = $mailData['lastname'].' '.$mailData['firstname'];
            $mail = $mailData['email'];
            $mailer->sendEmail($template, $mailData, $to, $mail, $fromName, $bcc);
            $this->flashMessage();
            return $this->redirectToRoute('solution_detail', ['slug' => $solution->getSlug()]);
        }
        return $this->render('front/solutions_detail_page.html.twig',[
            'form' => $form->createView(),
            'solution' => $solution,
            'partners'  => $partnerRepository->findAll()
        ]);
    }



    /**
     * @param FamilyFormerRepository $familyFormerRepository
     * @param PartnerRepository $partnerRepository
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/nos-formations", name="family_former", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function FamilyFormer(FamilyFormerRepository $familyFormerRepository, PartnerRepository $partnerRepository)
    {
        return $this->render('front/family_former.html.twig',[
            'families' => $familyFormerRepository->findAll(),
            'partners'  => $partnerRepository->findAll()
        ]);
    }


    /**
     * Page pour voir tout les services
     * @Route("/nos-services", name="services", methods={"GET"}, schemes={"%secure_channel%"})
     * @param ServiceRepository $serviceRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function services(ServiceRepository $serviceRepository)
    {
        return $this->render('front/services.html.twig',[
            'services' => $serviceRepository->findAll()
        ]);
    }


    /**
     * @param Category $category
     * @param $slug
     * @param PostRepository $postRepository
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/page/categories/solutions/{slug}", name="solution_page", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function SubFamilyPage(Category $category, $slug, PostRepository $postRepository)
    {
        return $this->render('front/solution__page.html.twig',[
            'category' => $category,
            'posts'    => $postRepository->getPostLimited(8)
        ]);
    }


    /**
     * @Route("/blog", name="blog", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function blog()
    {
        return $this->render('front/blog.html.twig');
    }

    /**
     * @Route("/blog-secteurs", name="blog_sector", methods={"GET"}, schemes={"%secure_channel%"})
     * @param PostRepository $postRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function blogSector(PostRepository $postRepository)
    {
        return $this->render('front/blog_sector.html.twig');
    }

    /**
     * @Route("/blog/detail/{slug}", name="detail_blog", methods={"GET"}, schemes={"%secure_channel%"})
     * @param Post $post
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function blog_detail(Post $post)
    {
        dump($post);
        return $this->render('front/blog_detail.html.twig');
    }

    /**
     * @Route("/nous-contactez", name="contact", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function contact()
    {
        return $this->render('front/contact.html.twig');
    }

    /**
     * @param ActivityRepository $activityRepository
     * @param SectionRepository $sectionRepository
     * @param ServiceRepository $serviceRepository
     * @param FamilyFormerRepository $familyFormerRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function renderNav(ActivityRepository $activityRepository, SectionRepository $sectionRepository, ServiceRepository $serviceRepository, FamilyFormerRepository $familyFormerRepository)
    {
        return $this->render('front/includes/nav_main.html.twig', $this->getNavigationContent(
            $activityRepository, $sectionRepository, $serviceRepository, $familyFormerRepository
        ));
    }

    /**
     * @param ActivityRepository $activityRepository
     * @param SectionRepository $sectionRepository
     * @param ServiceRepository $serviceRepository
     * @param FamilyFormerRepository $familyFormerRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function renderFooter(ActivityRepository $activityRepository, SectionRepository $sectionRepository, ServiceRepository $serviceRepository, FamilyFormerRepository $familyFormerRepository)
    {
        return $this->render('front/includes/footer.html.twig', $this->getNavigationContent(
            $activityRepository, $sectionRepository, $serviceRepository, $familyFormerRepository
        ));
    }

    /**
     * @param ActivityRepository $activityRepository
     * @param SectionRepository $sectionRepository
     * @param ServiceRepository $serviceRepository
     * @param FamilyFormerRepository $familyFormerRepository
     * @return array
     */
    private function getNavigationContent(ActivityRepository $activityRepository, SectionRepository $sectionRepository, ServiceRepository $serviceRepository, FamilyFormerRepository $familyFormerRepository) {
        return [
            'activities' => $activityRepository->findAll(),
            'sections'  => $sectionRepository->getRecursiveData(),
            'services'  => $serviceRepository->findAll(),
            'families'   => $familyFormerRepository->getRecursiveData()
        ];
    }

    /**
     * @param $data
     * @return array
     */
    private function getEntityGivenId( array $data) {
        $result = [];
        foreach ($data as $d) {
            $result[$d->getId()] = $d->getId();
        }
        return $result;
    }


    private function dataDevisConstructor($data)
    {
         $data_mail = [
            'firstname' => (($data["firstname"] === null) ? null : $data["firstname"]),
            'lastname'  => (($data["lastname"] === null) ? null : $data["lastname"]),
            'compagny'  => (($data["compagny"] === null) ? null : $data["compagny"]),
            'phone'     => (($data["phone"] === null) ? null : $data["phone"]),
            'email'     => (($data["email"] === null) ? null : $data["email"]),
            'qte'       => (($data["qte"] === null) ? null : $data["qte"]),
            'poste'     => (($data["poste"] === null) ? null : $data["poste"]),
            'service'   => (($data["service"] === null) ? null : $data["service"]),
            'type'   => (($data["type"] === null) ? null : $data["type"])
        ];
         if ($data['solution']) {
             $data_mail['solution'] = (($data["solution"]->getName() === null) ? null : $data["solution"]->getName());
         }
        if ($data['family']) {
            $data_mail['family'] = (($data["solution"]->getCategory()->getName() === null) ? null : $data["solution"]->getCategory()->getName());
        }
         return $data_mail;
    }


    private function flashMessage() {
        return $this->addFlash(
            'success',
            ' Nous avons votre demande de devis d\'une de nos solutions par mail. Nos services reviendrons vers vous d\'ici peu. NB: Vous pouvez consulter l\'exemplaire de votre demande par mail, nous vous remercions pour votre confiance'
        );
    }
}