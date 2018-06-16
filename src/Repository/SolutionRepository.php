<?php

namespace App\Repository;

use App\Entity\Solution;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Solution|null find($id, $lockMode = null, $lockVersion = null)
 * @method Solution|null findOneBy(array $criteria, array $orderBy = null)
 * @method Solution[]    findAll()
 * @method Solution[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SolutionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Solution::class);
    }

    /**
     * @param array $categories
     * @return \Doctrine\ORM\QueryBuilder
     */
    public function getSolutionsWithCategories(array $categories) {
        $qb = $this->createQueryBuilder('s')
            ->leftJoin('s.category', 'c');
        $qb->where($qb->expr()->in(
            's.category',':categories'
        ));
        $qb->setParameter('categories', $categories);
        return $qb;
    }


//    /**
//     * @return Solution[] Returns an array of Solution objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Solution
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
