using System.ComponentModel.DataAnnotations;

namespace WebApi.Features.Products;

public sealed record ProductModel
{
    public int Id { get; set; }

    [Required, MinLength(2)]
    public required string Desciption { get; set; }
}
