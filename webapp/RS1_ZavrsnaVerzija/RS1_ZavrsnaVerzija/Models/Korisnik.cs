using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using Microsoft.AspNetCore.Identity;

namespace SeminarskiTest.Models
{
    public class Korisnik : IdentityUser
    {
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public DateTime DatumRodjenja { get; set; }
        public string Grad { get; set; }
        public string BrojTelefona { get; set; }
        public string Adresa { get; set; }
        public string Lozinka { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [ForeignKey(nameof(Drzava))]
        public int? DrzavaId { get; set; }
        public Drzava Drzava { get; set; }

        [ForeignKey(nameof(Spol))]
        public int? SpolId { get; set; }
        public Spol Spol { get; set; }
    }
}
