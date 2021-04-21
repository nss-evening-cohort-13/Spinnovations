﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Dapper;
using Spinnovations.Models;

namespace Spinnovations.Data
{
    public class ProductCategoryRepository
    {
        readonly string ConnectionString;

        public ProductCategoryRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("Spinnovations");
        }

        public IEnumerable<ProductCategory> GetAll()
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = "SELECT * FROM [Product_Category]";
            return db.Query<ProductCategory>(sql).ToList();
        }

        public ProductCategory Get(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = "SELECT * FROM [Product_Category] WHERE Id = @id";
            var productCategory = db.QueryFirstOrDefault<ProductCategory>(sql, new { id = id });
            return productCategory;
        }

        public void Add(ProductCategory pc)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"INSERT INTO [Product_Category]
                           ([Category_Name])
                        VALUES
                           (@Category_Name)";
            var id = db.ExecuteScalar<int>(sql, pc);
            pc.Id = id;
        }

        public void Update(ProductCategory pc)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"UPDATE Product_Category
                        SET Category_Name = @category_Name
                        WHERE Id = @id";
            db.Execute(sql, pc);
        }

        public void Delete(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = "DELETE FROM Product_Category WHERE Id = @id";
            db.Execute(sql, new { id = id });
        }
    }
}