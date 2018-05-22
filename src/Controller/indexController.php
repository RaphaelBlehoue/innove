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
}