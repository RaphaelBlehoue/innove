<?php

namespace App\Form;

use App\Entity\FamilyFormer;
use App\Entity\Formation;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FormationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('familyformer', EntityType::class, [
                'class' => FamilyFormer::class,
                'choice_label' => 'name',
                'label' => 'Choix de la Famille de la formation',
                'required' => true,
                'attr' => ['placeholder' => 'Choix de la Famille de la formation', 'class' => 'col-md-6']
            ])
            ->add('title', TextType::class, [
                'label' => 'Titre de la formation',
                'attr' => ['placeholder' => 'Entrez le titre ici']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Formation::class,
        ]);
    }
}
