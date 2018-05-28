<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180525235214 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, section_id INT DEFAULT NULL, name LONGTEXT DEFAULT NULL, content LONGTEXT DEFAULT NULL, created DATETIME DEFAULT NULL, INDEX IDX_64C19C1D823E37A (section_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE section (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, content LONGTEXT DEFAULT NULL, created DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE solution (id INT AUTO_INCREMENT NOT NULL, category_id INT DEFAULT NULL, image_size INT NOT NULL, image_name VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, content LONGTEXT DEFAULT NULL, reader VARCHAR(255) NOT NULL, service_link LONGTEXT DEFAULT NULL, created DATETIME DEFAULT NULL, INDEX IDX_9F3329DB12469DE2 (category_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE category ADD CONSTRAINT FK_64C19C1D823E37A FOREIGN KEY (section_id) REFERENCES section (id)');
        $this->addSql('ALTER TABLE solution ADD CONSTRAINT FK_9F3329DB12469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE solution DROP FOREIGN KEY FK_9F3329DB12469DE2');
        $this->addSql('ALTER TABLE category DROP FOREIGN KEY FK_64C19C1D823E37A');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE section');
        $this->addSql('DROP TABLE solution');
    }
}
