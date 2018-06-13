<?php

namespace App\Controller;

use App\Entity\FamilyFormer;
use App\Form\FamilyFormerType;
use App\Repository\FamilyFormerRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/family/former")
 */
class FamilyFormerController extends Controller
{
    /**
     * @Route("/", name="family_former_index", methods="GET")
     * @param FamilyFormerRepository $familyFormerRepository
     * @return Response
     */
    public function index(FamilyFormerRepository $familyFormerRepository): Response
    {
        return $this->render('family_former/index.html.twig', ['family_formers' => $familyFormerRepository->findAll()]);
    }

    /**
     * @Route("/new", name="family_former_new", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $familyFormer = new FamilyFormer();
        $form = $this->createForm(FamilyFormerType::class, $familyFormer);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($familyFormer);
            $em->flush();

            return $this->redirectToRoute('family_former_index');
        }

        return $this->render('family_former/new.html.twig', [
            'family_former' => $familyFormer,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="family_former_show", methods="GET")
     * @param FamilyFormer $familyFormer
     * @return Response
     */
    public function show(FamilyFormer $familyFormer): Response
    {
        return $this->render('family_former/show.html.twig', ['family_former' => $familyFormer]);
    }

    /**
     * @Route("/{id}/edit", name="family_former_edit", methods="GET|POST")
     * @param Request $request
     * @param FamilyFormer $familyFormer
     * @return Response
     */
    public function edit(Request $request, FamilyFormer $familyFormer): Response
    {
        $form = $this->createForm(FamilyFormerType::class, $familyFormer);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('family_former_index');
        }

        return $this->render('family_former/edit.html.twig', [
            'family_former' => $familyFormer,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="family_former_delete", methods="DELETE")
     * @param Request $request
     * @param FamilyFormer $familyFormer
     * @return Response
     */
    public function delete(Request $request, FamilyFormer $familyFormer): Response
    {
        if ($this->isCsrfTokenValid('delete'.$familyFormer->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($familyFormer);
            $em->flush();
        }

        return $this->redirectToRoute('family_former_index');
    }
}
