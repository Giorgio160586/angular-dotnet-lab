using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace WebApi.Features.Products;

public enum ProductStatus
{
    [EnumMember(Value = "In Stock")]
    InStock,

    [EnumMember(Value = "Low Stock")]
    LowStock,

    [EnumMember(Value = "Out of Stock")]
    OutOfStock
}


public sealed record ProductModel
{
    public int Id { get; set; }

    [Required, MinLength(2)]
    public required string Name { get; set; }
    public required string Category { get; set; }
    public required double Price { get; set; }

    [JsonConverter(typeof(JsonStringEnumConverterWithAttributeSupport))]
    [EnumDataType(typeof(ProductStatus))]
    public required ProductStatus Status { get; set; }
}