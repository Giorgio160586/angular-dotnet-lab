using Microsoft.AspNetCore.Mvc;
using WebApi.Features.Users;

namespace WebApi.Features.Products;

public static class ProductEndpoints
{
    private const string Tag = "Products";

    public static IEndpointRouteBuilder Map(this IEndpointRouteBuilder app)
    {
        app.MapGet("/products", async (int first, int size, ProductHandlers handler) =>
        {
            var (items, total) = await handler.GetPagedAsync(first, size);
            return Results.Ok(new { item1 = items, item2 = total });
        })
        .WithTags(Tag)
        .RequireAuthorization();

        app.MapPost("/product/insert", (ProductModel model) => { return "OK"; })
            .WithTags(Tag)
            .RequireAuthorization();

        return app;
    }
}
