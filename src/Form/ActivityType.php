<?php

namespace App\Form;

use App\Entity\Activity;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class ActivityType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom du domaine d\'activité',
                'attr' => ['placeholder' => 'Entrez domaine d\'activité']
            ])
            ->add('imageFile', VichImageType::class, [
                'attr'  => ['data-provide' => 'dropify'],
                'label' => false
            ])
            ->add('content', TextareaType::class, [
                'attr'  => ['placeholder' => 'Entrez le contenu ici', 'class' => 'editor']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Activity::class,
        ]);
    }
}
