<?php
/**
 * Created by IntelliJ IDEA.
 * User: raphael
 * Date: 21/05/2018
 * Time: 23:01
 */

namespace App\Controller;


use App\Entity\Activity;
use App\Entity\Section;
use App\Entity\Service;
use App\Repository\ActivityRepository;
use App\Repository\PartnerRepository;
use App\Repository\PostRepository;
use App\Repository\SectionRepository;
use App\Repository\ServiceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PageController
 * @package App\Controller
 */
class PageController extends AbstractController
{

    /**
     * @var SectionRepository
     */
    private $sectionRepository;

    public function __construct(SectionRepository $sectionRepository)
    {
        $this->sectionRepository = $sectionRepository;
    }

    /**
     * @Route("/", name="homepage", methods={"GET"}, schemes={"%secure_channel%"})
     * @param ServiceRepository $serviceRepository
     * @param ActivityRepository $activityRepository
     * @param PartnerRepository $partnerRepository
     * @param PostRepository $postRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(ServiceRepository $serviceRepository, ActivityRepository $activityRepository, PartnerRepository $partnerRepository, PostRepository $postRepository)
    {
       return $this->render('index/index.html.twig',[
           'sections' => $this->sectionRepository->findAll(),
           'services' => $serviceRepository->findAll(),
           'activities' => $activityRepository->findAll(),
           'partners'  => $partnerRepository->findAll(),
           'posts'     => //$partnerRepository->
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
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function solution(SectionRepository $sectionRepository)
    {
        return $this->render('front/solutions.html.twig',[
            'sections' => $sectionRepository->findAll()
        ]);
    }

    /**
     * Page pour voir la liste des sous-catégories d'une section
     * @Route("/page/section/{slug}", name="section_solution_page", methods={"GET"}, schemes={"%secure_channel%"})
     * @param Section $section
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function sectionSolutionPage(Section $section, $slug)
    {
        dump($section);
        return $this->render('front/section_page.html.twig');
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
     * Page pour voir tout les secteurs d'activité
     * @Route("/secteurs-dactivite", name="secteurs_activity", methods={"GET"}, schemes={"%secure_channel%"})
     * @param ActivityRepository $activityRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function activitySector(ActivityRepository $activityRepository)
    {
        return $this->render('front/activity_sector.html.twig',[
            'activities' => $activityRepository->findAll()
        ]);
    }

    /**
     * Page pour voir le détail d'un secteur d'activité
     * @Route("/secteurs-dactivite/{slug}", name="secteurs_activity_detail", methods={"GET"}, schemes={"%secure_channel%"})
     * @param ActivityRepository $activityRepository
     * @param Activity $activity
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function activityPage(ActivityRepository $activityRepository, Activity $activity)
    {
        dump($activity);
        return $this->render('front/activity_page.html.twig');
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
     */
    public function blogSector()
    {
        return $this->render('front/blog_sector.html.twig');
    }

    /**
     * @Route("/blog/detail", name="detail_blog", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function blog_detail()
    {
        return $this->render('front/blog_detail.html.twig');
    }
}