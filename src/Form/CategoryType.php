<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\Section;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CategoryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('section', EntityType::class, [
                'class' => Section::class,
                'choice_label' => 'name',
                'label' => 'Choix de la Catégorie',
                'required' => true,
                'attr' => ['placeholder' => 'Choix de la Catégorie', 'class' => 'col-md-6']
            ])
            ->add('name', TextType::class, [
                'label' => 'Nom de la sous-catégories de solution',
                'attr' => ['placeholder' => 'Entrez le nom']
            ])
            ->add('content', TextareaType::class, [
                'label' => 'Entrez le contenu ici',
                'attr'  => ['placeholder' => 'Entrez le contenu ici', 'class' => 'editor']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Category::class,
        ]);
    }
}
