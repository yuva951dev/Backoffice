using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackOffice.Core.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        [Required]
        public string  Email { get; set; }

        [Required]
        public string  Password { get; set; }

        public int RoleId { get; set; }

        public Role Role { get; set; }
    }
}
