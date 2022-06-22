using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Photo
    {
        public int PhotoId { get; set; }

        [Required, MinLength(3)]
        public string PhotoTags { get; set; }
        /*[Required, MinLength(3)]*/

        [Required, MinLength(3)]
        public string PhotoURL { get; set; }
        /*[Required, MinLength(3)]*/
        
    }
}
