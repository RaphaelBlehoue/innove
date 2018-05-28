<?php

namespace App\Form;

use App\Entity\Solution;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SolutionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('imageSize')
            ->add('imageName')
            ->add('name')
            ->add('content')
            ->add('reader')
            ->add('service_link')
            ->add('created')
            ->add('category')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Solution::class,
        ]);
    }
}
