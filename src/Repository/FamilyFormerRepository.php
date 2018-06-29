<?php

namespace App\Repository;

use App\Entity\FamilyFormer;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method FamilyFormer|null find($id, $lockMode = null, $lockVersion = null)
 * @method FamilyFormer|null findOneBy(array $criteria, array $orderBy = null)
 * @method FamilyFormer[]    findAll()
 * @method FamilyFormer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FamilyFormerRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, FamilyFormer::class);
    }

    /**
     * @return mixed
     */
    public function getRecursiveData()
    {
        return $this->createQueryBuilder('f')
            ->leftJoin('f.formations', 'ff')
            ->addSelect('ff')
            ->orderBy('f.id', 'ASC')
            ->getQuery()
            ->getResult();
    }

//    /**
//     * @return FamilyFormer[] Returns an array of FamilyFormer objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?FamilyFormer
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
