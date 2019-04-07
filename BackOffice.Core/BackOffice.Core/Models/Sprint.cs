using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackOffice.Core.Models
{
    public class Sprint
    {
        public int SprintId { get; set; }

        public string SprintName { get; set; }

        public bool Active { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }

        public int ProjectId { get; set; }

        public Project Project { get; set; }
    }
}
