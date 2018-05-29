<?php
/**
 * Created by IntelliJ IDEA.
 * User: raphael
 * Date: 21/05/2018
 * Time: 23:01
 */

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class indexController
 * @package App\Controller
 */
class indexController extends AbstractController
{
    /**
     * @Route("/", name="homepage", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function index()
    {
       return $this->render('index/index.html.twig');
    }

    /**
     * @Route("/about-us", name="about", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function about()
    {
        return $this->render('front/about.html.twig');
    }

    /**
     * @Route("/secteurs-dactivite", name="secteurs_activity", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function activitySector()
    {
        return $this->render('front/activity_sector.html.twig');
    }

    /**
     * @Route("/nos-solutions", name="solutions", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function solution()
    {
        return $this->render('front/solutions.html.twig');
    }

    /**
     * @Route("/nos-services", name="services", methods={"GET"}, schemes={"%secure_channel%"})
     */
    public function services()
    {
        return $this->render('front/services.html.twig');
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