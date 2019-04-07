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
        public int UserId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        [Required]
        public string  Email { get; set; }

        [Required]
        public string  Password { get; set; }

        public string FatherName { get; set; }

        public string MotherName { get; set; }

        public DateTime DOB { get; set; }

        public DateTime DateOfJoining { get; set; }

        public DateTime DateOfRelieving { get; set; }

        public string AdharNumber { get; set; }

        public string PanNumber { get; set; }

        public bool Active { get; set; }

        public int RoleId { get; set; }

        public Role Role { get; set; }

        public List<UserProject> UserProjects { get; set; }
    }
}
