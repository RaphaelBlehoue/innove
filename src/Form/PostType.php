<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\Post;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class PostType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('activity', EntityType::class, [
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
            ->add('title', TextType::class, [
                'label' => 'Titre de l\'actualité',
                'attr' => ['placeholder' => 'Entrez le titre ici']
            ])
            ->add('content', TextareaType::class, [
                'label' => 'Contenu  de l\'actualité',
                'attr'  => ['placeholder' => 'Entrez le contenu ici', 'class' => 'editor']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Post::class,
        ]);
    }
}
