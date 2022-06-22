using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Player
    {
        public int PlayersId { get; set; }

        [Required, MinLength(3)]
        public string PlayerstName { get; set; }
        /*[Required, MinLength(3)]*/

        [Required, MinLength(3)]
        public string PlayersCity { get; set; }
        /*[Required, MinLength(3)]*/
        
    }
}
