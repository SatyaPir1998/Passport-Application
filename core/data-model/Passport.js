module.exports = {
  id: "Passport",
  label: "Passport",
  description: "",
  fields: [
  {
    "id": "1",
    "name": "PassportNumber",
    "type": "string",
    "required": true,
    "description": "Unique passport number"
  },
  {
    "id": "2",
    "name": "DateOfIssue",
    "type": "date",
    "required": true,
    "description": "Date when the passport was issued"
  },
  {
    "id": "3",
    "name": "DateOfExpiry",
    "type": "date",
    "required": true,
    "description": "Date when the passport will expire"
  },
  {
    "id": "4",
    "name": "IssuingAuthority",
    "type": "string",
    "required": true,
    "description": "Authority that issued the passport"
  }
]
};