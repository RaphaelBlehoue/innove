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
use App\Entity\Post;
use App\Entity\Section;
use App\Entity\Service;
use App\Entity\Solution;
use App\Repository\ActivityRepository;
use App\Repository\PartnerRepository;
use App\Repository\PostRepository;
use App\Repository\SectionRepository;
use App\Repository\ServiceRepository;
use App\Repository\SolutionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(ServiceRepository $serviceRepository, ActivityRepository $activityRepository, PartnerRepository $partnerRepository, PostRepository $postRepository, SectionRepository $sectionRepository)
    {
       return $this->render('index/index.html.twig',[
           'sections' => $sectionRepository->findAll(),
           'services' => $serviceRepository->findAll(),
           'activities' => $activityRepository->findAll(),
           'partners'  => $partnerRepository->findAll(),
           'posts'     => $postRepository->getPostLimited(8)
       ]);
    }

    /**
     * @Route("/about-us", name="about", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function about()
    {
        return $this->render('front/about.html.twig');
    }

    /**
     * Page pour voir toute les Categories de solution
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
     * Page pour voir la liste des sous-catégories d'une section
     * @Route("/page/section/categories/{slug}", name="section_category_solution_page", methods={"GET"}, schemes={"%secure_channel%"})
     * @param Section $section
     * @param $slug
     * @param PartnerRepository $partnerRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function sectionSolutionPage(Section $section, $slug, PartnerRepository $partnerRepository)
    {
        return $this->render('front/section_category_page.html.twig',[
            'section' => $section,
            'partners'  => $partnerRepository->findAll()
        ]);
    }

    /**
     * @param Category $category
     * @param $slug
     * @param PostRepository $postRepository
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/page/categories/solutions/{slug}", name="solution_page", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function solutionPage(Category $category, $slug, PostRepository $postRepository)
    {
        return $this->render('front/solution__page.html.twig',[
            'category' => $category,
            'posts'    => $postRepository->getPostLimited(8)
        ]);
    }

    /**
     * @param Solution $solution
     * @param $slug
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/page/solutions/{slug}", name="solution_detail", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function solutionDetail(Solution $solution, $slug, PartnerRepository $partnerRepository)
    {
        return $this->render('front/solutions_detail_page.html.twig',[
            'solution' => $solution,
            'partners'  => $partnerRepository->findAll()
        ]);
    }

    /**
     * Page pour voir tout les secteurs d'activité
     * @Route("/secteurs-dactivite", name="secteurs_activity", methods={"GET"}, schemes={"%secure_channel%"})
     * @param ActivityRepository $activityRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function activitySector(ActivityRepository $activityRepository, PostRepository $postRepository)
    {
        return $this->render('front/activity_sector.html.twig',[
            'activities' => $activityRepository->findAll(),
            'posts'    => $postRepository->getPostLimited(8)
        ]);
    }

    /**
     * Page pour voir le détail d'un secteur d'activité
     * @Route("/secteurs-dactivite/{slug}", name="secteurs_activity_detail", methods={"GET"}, schemes={"%secure_channel%"})
     * @param ActivityRepository $activityRepository
     * @param Activity $activity
     * @param PartnerRepository $partnerRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function activityPage(ActivityRepository $activityRepository, Activity $activity, PartnerRepository $partnerRepository)
    {
        return $this->render('front/activity_page.html.twig',[
            'activity' => $activity,
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
     * Page pour voir le detail d'un services
     * @param ServiceRepository $serviceRepository
     * @param Service $service
     * @Route("/page/service/{slug}", name="service_page", methods={"GET"}, schemes={"%secure_channel%"})
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function servicePage(ServiceRepository $serviceRepository, Service $service)
    {
        dump($service);
        return $this->render('front/service_page.html.twig');
    }


    /**
     * @Route("/nos-formations", name="formations", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function formations()
    {
        return $this->render('front/formations.html.twig');
    }

    /**
     * @Route("/nous-contactez", name="contact", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function contact()
    {
        return $this->render('front/contact.html.twig');
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

    public function renderNav(ActivityRepository $activityRepository, SectionRepository $sectionRepository, ServiceRepository $serviceRepository)
    {
        return $this->render('front/includes/nav.html.twig',[
            'activities' => $activityRepository->findAll(),
            'sections'  => $sectionRepository->getRecursiveData(),
            'services'  => $serviceRepository->findAll()
        ]);
    }
}