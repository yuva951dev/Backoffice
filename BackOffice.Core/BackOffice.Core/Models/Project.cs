using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackOffice.Core.Models
{
    public class Project
    {

        public int ProjectId { get; set; }

        public string ProjectName { get; set; }

        public bool Active { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }

        public List<Sprint> Sprints { get; set; }

        public List<UserProject> UserProjects { get; set; }
    }
}
