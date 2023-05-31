using System.ComponentModel.DataAnnotations;

namespace SeminarskiTest.ViewModels
{
    public class LoginKorisnikVModel
    {
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        public string Lozinka { get; set; }
    }
}
