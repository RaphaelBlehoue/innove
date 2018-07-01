<?php

namespace App\Form;

use App\Entity\Formation;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\NotBlank;

class FormationDevisType extends AbstractType
{
    public  $type = [
        'GRANDE ENTREPRISE' => 'GRANDE ENTREPRISE',
        'ORGANISATION' => 'ORGANISATION/ONG/ASSOCIATION',
        'PME' => 'PME'
    ];

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('formation', EntityType::class, [
                'class' => Formation::class,
                'choice_label' => 'title',
                'label' => 'Choix de la formation',
                'required' => true,
                'attr' => ['placeholder' => 'Choix de la formation', 'class' => 'col-md-6']
            ])
            ->add('email', TextType::class,[
                'label' => 'ADRESSE EMAIL',
                'attr' => ["class" => "big-input", "placeholder" => "Entrez une adresse email"],
                'required' => 'true',
                'constraints' => [
                    new NotBlank(['message' => 'Adresse email obligatoire']),
                    new Email(['message' => 'Entrez une adresse mail valide'])
                ]
            ])
            ->add('lastname', TextType::class, [
                'label' => 'PRENOM',
                'attr' => ["class" => "big-input", "placeholder" => "Entrez votre prénom"],
                'required' => 'true',
                'constraints' => [
                    new NotBlank(['message' => 'Votre Prénom s\'il vous plait'])
                ]
            ])
            ->add('firstname', TextType::class, [
                'label' => 'NOM',
                'attr' => ["class" => "big-input", "placeholder" => "Entrez votre nom"],
                'required' => 'true',
                'constraints' => [
                    new NotBlank(['message' => 'Votre nom s\'il vous plait'])
                ]
            ])
            ->add('compagny', TextType::class, [
                'label' => 'SOCIETE',
                'attr' => ["class" => "big-input", "placeholder" => "Entrez votre société"],
                'required' => 'true',
                'constraints' => [
                    new NotBlank(['message' => 'Votre société s\'il vous plait'])
                ]
            ])
            ->add('phone', TextType::class, [
                'label' => 'TELEPHONE',
                'attr' => ["class" => "big-input", "placeholder" => "Ex: +225 00 00 00 00"],
                'required' => 'true',
                'constraints' => [
                    new NotBlank(['message' => 'Votre numéro de téléphone s\'il vous plait'])
                ]
            ])
            ->add('poste', NumberType::class, [
                'label' => 'NOMBRE DE PERSONNE',
                'attr' => ["class" => "big-input", "placeholder" => "Entrez le nombre de poste"],
                'required' => 'true',
                'scale' => 0,
                'constraints' => [
                    new NotBlank(['message' => 'Entrez le nombre de poste'])
                ]
            ])
            ->add('type', ChoiceType::class, [
                'label' => 'Type de votre organisation',
                'attr' => ["class" => "big-input", "placeholder" => "Choix du type"],
                'required' => 'true',
                'choices' => $this->type,
                'constraints' => [
                    new NotBlank(['message' => 'Faites le choix du type de pack'])
                ]
            ])
            ->add('envoyer', SubmitType::class, [
                'attr' => ['class' => 'btn btn-transparent-dark-gray btn-large margin-20px-top']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'formation' => null
        ]);
    }
}
