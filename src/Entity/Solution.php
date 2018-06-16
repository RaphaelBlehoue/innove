<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints AS Assert;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SolutionRepository")
 * @Vich\Uploadable
 */

class Solution
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @Assert\File(
     *     maxSize="3M",
     *     mimeTypes={"image/png", "image/jpeg", "image/jpg"}
     * )
     *
     * @Vich\UploadableField(mapping="solution_image", fileNameProperty="imageName", size="imageSize")
     *
     * @var File $imageFile
     */
    protected $imageFile;


    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $imageSize;


    /**
     * @var string $imageName
     *
     * @ORM\Column(type="string", length=255)
     */
    protected $imageName;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Entrez le nom de la solution")
     */
    protected $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Gedmo\Slug(fields={"name", "id"}, separator="_", updatable=false)
     */
    protected $slug;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Assert\NotBlank(message="Entrez la description")
     */
    protected $content;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Coller la balise de partage des documents")
     */
    protected $reader;


    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    protected $created;

    /**
     * @var
     * @ORM\ManyToOne(targetEntity="App\Entity\Category", inversedBy="solutions")
     */
    protected $category;


    public function __construct()
    {
        $this->created = new \DateTime('now');
    }

    public function getId()
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getReader(): ?string
    {
        return $this->reader;
    }

    public function setReader(string $reader): self
    {
        $this->reader = $reader;

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

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the  update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile $image
     * @throws \Exception
     */
    public function setImageFile(?File $image = null): void
    {
        $this->imageFile = $image;
        if (null !== $image) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->created = new \DateTimeImmutable();
        }
    }
    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function getUploadDir()
    {
        // On retourne le chemin relatif vers l'image pour un navigateur
        return 'images/solution';
    }


    protected function getUploadRootDir()
    {
        // On retourne le chemin relatif vers l'image pour notre code PHP
        return __DIR__.'/../../../../public/'.$this->getUploadDir();
    }

    /**
     * @return string
     */
    public function getAssertPath()
    {
        return $this->getUploadDir().'/'.$this->imageName;
    }

    public function getImageSize(): ?int
    {
        return $this->imageSize;
    }

    public function setImageSize(int $imageSize): self
    {
        $this->imageSize = $imageSize;

        return $this;
    }

    public function getImageName(): ?string
    {
        return $this->imageName;
    }

    public function setImageName(string $imageName): self
    {
        $this->imageName = $imageName;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }
}
