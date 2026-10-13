# SQL Data Types

SQL data types define **what kind of data a column can store** in a database.

## Common SQL Data Types

- **INT** — Whole numbers, e.g. `10`, `-5`, `1000`
    
- **DECIMAL** — Numbers with decimal places, e.g. `19.99`
    
- **VARCHAR(n)** — Variable-length text, e.g. `'John'`
    
- **CHAR(n)** — Fixed-length text
    
- **TEXT** — Longer pieces of text
    
- **DATE** — A date, e.g. `2026-09-18`
    
- **TIME** — A time, e.g. `14:30:00`
    
- **DATETIME / TIMESTAMP** — Date and time together
    
- **BOOLEAN** — True or false values
    

## Example

```sql
CREATE TABLE students (
    id INT,
    name VARCHAR(100),
    birth_date DATE,
    average DECIMAL(4,2),
    active BOOLEAN
);
```

**Key idea:** Choosing the correct data type helps keep data **accurate, consistent, and efficient**.

---
