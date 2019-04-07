using BackOffice.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace BackOffice.Core.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserProject> UserProjects { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();

            builder.Entity<Role>()
               .HasIndex(u => u.RoleName)
               .IsUnique();
            builder.Entity<UserProject>().
                HasKey(sc => new { sc.UserId, sc.ProjectId });

            builder.Entity<UserProject>()
                .HasOne<User>(sc => sc.User)
                .WithMany(s => s.UserProjects)
                .HasForeignKey(sc => sc.UserId);


            builder.Entity<UserProject>()
               .HasOne<Project>(sc => sc.Project)
               .WithMany(s => s.UserProjects)
               .HasForeignKey(sc => sc.ProjectId);
        }

    }
}

