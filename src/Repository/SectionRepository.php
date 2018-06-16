<?php

namespace App\Repository;

use App\Entity\Section;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Section|null find($id, $lockMode = null, $lockVersion = null)
 * @method Section|null findOneBy(array $criteria, array $orderBy = null)
 * @method Section[]    findAll()
 * @method Section[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SectionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Section::class);
    }

    /**
     * @param null $entity_id
     * @return mixed
     */
    public function getRecursiveData($entity_id = null)
    {
        $qb = $this->createQueryBuilder('s');
        $qb->leftJoin('s.categories', 'c')
            ->addSelect('c')
            ->leftJoin('c.solutions', 'p')
            ->addSelect('p');
        if ($entity_id !== null) {
            $qb->where($qb->expr()->eq('s.id', ':entity_id'))
                ->setParameter('entity_id', $entity_id);
        }
        $qb->orderBy('s.position', 'ASC');
        return $qb->getQuery()->getResult();
    }

//    /**
//     * @return Section[] Returns an array of Section objects
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
    public function findOneBySomeField($value): ?Section
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
