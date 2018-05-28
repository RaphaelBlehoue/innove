<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\Solution;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class SolutionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('category', EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'name',
                'label' => 'Choix de la Sous-Catégorie',
                'required' => true,
                'attr' => ['placeholder' => 'Choix de la Sous-Catégorie', 'class' => 'col-md-6']
            ])
            ->add('imageFile', VichImageType::class, [
                'attr'  => ['data-provide' => 'dropify'],
                'label' => false
            ])
            ->add('name', TextType::class, [
                'label' => 'Nom de la solution',
                'attr' => ['placeholder' => 'Entrez la solution']
            ])
            ->add('content', TextareaType::class, [
                'label' => 'Entrez le contenu ici',
                'attr'  => ['placeholder' => 'Entrez le contenu ici', 'class' => 'editor']
            ])
            ->add('reader', TextType::class, [
                'label' => 'Intégrez le lien de partage de la documentation ici',
                'attr' => ['placeholder' => 'Coller le lien ici']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Solution::class,
        ]);
    }
}
