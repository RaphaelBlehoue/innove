<?php

namespace App\Form;

use App\Entity\Section;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SectionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom de la catégories de solution',
                'attr' => ['placeholder' => 'Entrez le nom']
            ])
            ->add('pageTitle', TextType::class, [
                'label' => 'Titre pour la page solution',
                'attr' => ['placeholder' => 'Ex: Pourquoi avoir une solution de comptabilté ?']
            ])
            ->add('icon', TextType::class, [
                'label' => 'Code de l\'icon',
                'attr' => ['placeholder' => 'Entrez le nom de l\'icon']
            ])
            ->add('position', TextType::class, [
                'label' => 'Position d\'affichage dans le menu',
                'attr' => ['placeholder' => 'La position d\'affichage dans le menu']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Section::class,
        ]);
    }
}
