<?php

namespace App\Form;

use App\Entity\FamilyFormer;
use App\Entity\Formation;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

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
            ->add('imageFile', VichImageType::class, [
                'attr'  => ['data-provide' => 'dropify'],
                'label' => false,
                'required' => false
            ])
            ->add('title', TextType::class, [
                'label' => 'Titre de la formation',
                'attr' => ['placeholder' => 'Entrez le titre ici']
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
            'data_class' => Formation::class,
        ]);
    }
}
