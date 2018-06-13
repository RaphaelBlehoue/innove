<?php

namespace App\Controller;

use App\Entity\Solution;
use App\Form\SolutionType;
use App\Repository\SolutionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/solution")
 */
class SolutionController extends Controller
{
    /**
     * @Route("/", name="solution_index", methods="GET")
     */
    public function index(SolutionRepository $solutionRepository): Response
    {
        return $this->render('solution/index.html.twig', ['solutions' => $solutionRepository->findAll()]);
    }

    /**
     * @Route("/new", name="solution_new", methods="GET|POST")
     */
    public function new(Request $request): Response
    {
        $solution = new Solution();
        $form = $this->createForm(SolutionType::class, $solution);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($solution);
            $em->flush();

            return $this->redirectToRoute('solution_index');
        }

        return $this->render('solution/new.html.twig', [
            'solution' => $solution,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="solution_show", methods="GET")
     */
    public function show(Solution $solution): Response
    {
        return $this->render('solution/show.html.twig', ['solution' => $solution]);
    }

    /**
     * @Route("/{id}/edit", name="solution_edit", methods="GET|POST")
     */
    public function edit(Request $request, Solution $solution): Response
    {
        $form = $this->createForm(SolutionType::class, $solution);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('solution_edit', ['id' => $solution->getId()]);
        }

        return $this->render('solution/edit.html.twig', [
            'solution' => $solution,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="solution_delete", methods="DELETE")
     */
    public function delete(Request $request, Solution $solution): Response
    {
        if ($this->isCsrfTokenValid('delete'.$solution->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($solution);
            $em->flush();
        }

        return $this->redirectToRoute('solution_index');
    }
}
