<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\Solution;
use App\Repository\SolutionRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\NotBlank;

class FamilyDevisType extends AbstractType
{
    public  $type = [
        'Base' => 'Base', 'Pack'=>'Pack', 'Pack plus' => 'Pack plus'
    ];

    public $service = [
        'Achat' => 'Achat', 'Mise à jour' => 'Mise à jour'
    ];

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->addEventListener(
            FormEvents::POST_SET_DATA,
            function (FormEvent $event) {
                $catId = $event->getData();
                $event->getForm()->add('solution', EntityType::class, [
                    'class' => Solution::class,
                    'label' => 'CHOIX DU LOGICIEL',
                    'choice_label' => 'name',
                    'attr' => ['class' => 'Veuillez choisir un logiciel'],
                    'query_builder' => function (SolutionRepository $solutionRepository) use ($catId) {
                        return $solutionRepository->getSolutionsWithCategories($catId);
                    }
                ]);
            }
        );
        $builder
            ->add('email', TextType::class,[
                'label' => 'ADRESSE EMAIL',
                'attr' => ["class" => "big-input", "placeholder" => "Entrez une adresse email"],
                'constraints' => [
                    new NotBlank(['message' => 'Adresse email obligatoire']),
                    new Email(['message' => 'Entrez une adresse mail valide'])
                ]
            ])
            ->add('lastname', TextType::class, [
                'label' => 'PRENOM',
                'attr' => ["class" => "big-input", "placeholder" => "Entrez votre prénom"],
                'constraints' => [
                    new NotBlank(['message' => 'Votre Prénom s\'il vous plait'])
                ]
            ])
            ->add('firstname', TextType::class, [
                'label' => 'NOM',
                'attr' => ["class" => "big-input", "placeholder" => "Entrez votre nom"],
                'constraints' => [
                    new NotBlank(['message' => 'Votre nom s\'il vous plait'])
                ]
            ])
            ->add('compagny', TextType::class, [
                'label' => 'SOCIETE',
                'attr' => ["class" => "big-input", "placeholder" => "Entrez votre société"],
                'constraints' => [
                    new NotBlank(['message' => 'Votre société s\'il vous plait'])
                ]
            ])
            ->add('phone', TextType::class, [
                'label' => 'TELEPHONE',
                'attr' => ["class" => "big-input", "placeholder" => "Ex: +225 00 00 00 00"],
                'constraints' => [
                    new NotBlank(['message' => 'Votre numéro de téléphone s\'il vous plait'])
                ]
            ])
            ->add('qte', NumberType::class, [
                'label' => 'QUANTITE',
                'attr' => ["class" => "big-input", "placeholder" => "Entrez la quantité"],
                'constraints' => [
                    new NotBlank(['message' => 'Entrez la quantité s\'il vous plait'])
                ]
            ])
            ->add('poste', NumberType::class, [
                'label' => 'NOMBRE DE POSTE',
                'attr' => ["class" => "big-input", "placeholder" => "Entrez le nombre de poste"],
                'constraints' => [
                    new NotBlank(['message' => 'Entrez le nombre de poste'])
                ]
            ])
            ->add('service', ChoiceType::class, [
                'label' => 'SERVICE DEMANDE',
                'attr' => ["class" => "big-input", "placeholder" => "Choix du service associé"],
                'choices' => $this->service,
                'constraints' => [
                    new NotBlank(['message' => 'Faite le choix du type de services'])
                ]
            ])
            ->add('type', ChoiceType::class, [
                'label' => 'TYPE D\'OFFRE',
                'attr' => ["class" => "big-input", "placeholder" => "Choix du type"],
                'choices' => $this->type,
                'constraints' => [
                    new NotBlank(['message' => 'Faite le choix du type de pack'])
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
            'catId' => null,
            'categories' => null
        ]);
    }
}
