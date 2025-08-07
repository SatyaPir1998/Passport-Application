const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class PassportApplicationCase extends BlazeCase {
  constructor() {
    super(
      "PassportApplication",
      "Passport Application",
      [
  {
    "id": "1",
    "label": "Application Submission",
    "steps": [
      {
        "id": "1",
        "label": "Fill Application Form",
        "status": "pending",
        "type": "manual"
      },
      {
        "id": "2",
        "label": "Attach Required Documents",
        "status": "pending",
        "type": "manual"
      },
      {
        "id": "3",
        "label": "Submit Application",
        "status": "pending",
        "type": "manual"
      }
    ]
  },
  {
    "id": "2",
    "label": "Application Processing",
    "steps": [
      {
        "id": "1",
        "label": "Verify Submitted Documents",
        "status": "pending",
        "type": "manual"
      },
      {
        "id": "2",
        "label": "Perform Background Check",
        "status": "pending",
        "type": "automation"
      },
      {
        "id": "3",
        "label": "Approve/Reject Application",
        "status": "pending",
        "type": "manual"
      }
    ]
  },
  {
    "id": "3",
    "label": "Passport Issuance",
    "steps": [
      {
        "id": "1",
        "label": "Create Passport",
        "status": "pending",
        "type": "automation"
      },
      {
        "id": "2",
        "label": "Dispatch Passport",
        "status": "pending",
        "type": "automation"
      }
    ]
  }
]
    );
  }
}

module.exports = new PassportApplicationCase();