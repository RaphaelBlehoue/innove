<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180629220856 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE family_former DROP position, DROP content, DROP page_title');
        $this->addSql('ALTER TABLE formation DROP image_size, DROP image_name, DROP content');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE family_former ADD position INT DEFAULT NULL, ADD content LONGTEXT DEFAULT NULL COLLATE utf8_unicode_ci, ADD page_title VARCHAR(255) DEFAULT NULL COLLATE utf8_unicode_ci');
        $this->addSql('ALTER TABLE formation ADD image_size INT NOT NULL, ADD image_name VARCHAR(255) NOT NULL COLLATE utf8_unicode_ci, ADD content LONGTEXT NOT NULL COLLATE utf8_unicode_ci');
    }
}
