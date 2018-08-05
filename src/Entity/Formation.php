<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints AS Assert;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FormationRepository")
 */
class Formation
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotNull(message="Veuillez entrez le titre de la formation")
     */
    protected $title;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotNull(message="Veuillez entrez un contenu")
     */
    protected $content;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Gedmo\Slug(fields={"title", "id"}, separator="_", updatable=false)
     */
    protected $slug;

    /**
     * @var
     * @ORM\ManyToOne(targetEntity="App\Entity\FamilyFormer", inversedBy="formations")
     * @Assert\NotNull(message="Choix de la famille de formations")
     */
    protected $familyformer;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    protected $created;


    public function __construct()
    {
        $this->created = new \DateTime('now');
    }


    public function getId()
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;
        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }


    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(?string $slug): self
    {
        $this->slug = $slug;
        return $this;
    }

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(?\DateTimeInterface $created): self
    {
        $this->created = $created;
        return $this;
    }

    public function getFamilyformer(): ?FamilyFormer
    {
        return $this->familyformer;
    }

    public function setFamilyformer(?FamilyFormer $familyformer): self
    {
        $this->familyformer = $familyformer;
        return $this;
    }
}