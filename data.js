export const response = {
  title: "Convertible Securities",
  data: [
    {
      question: "What is the purpose of the valuation?",
      options: [
        ["Conversion Option (embedded derivative) Bifurcation", 8],
        ["Fair value of the whole position", 3]
      ]
    },
    {
      question: "Which of the following rights are present?",
      options: [
        ["Optional conversion before maturity", 3],
        ["Put right for the holder", 3],
        ["Redemption for the issuer", 3],
        ["Put right for the issuer", 3]
      ]
    },
    {
      question: "Which of the folowing features are applicable?",
      options: [
        [
          "Redemption/conversion is contingent upon achiving one specific stock price level",
          5
        ],
        [
          "Redemption/conversion is contingent upon achiving x-consecutive day stock price level",
          14
        ]
      ]
    },
    {
      question:
        "Which of the folowing features are applicable regarding divident rate?",
      options: [
        [
          "The dividen of the convertible is linked to common stock divident",
          10
        ],
        [
          "The convertible's dividend rate has different tiers for different time window ",
          7
        ]
      ]
    },
    {
      question:
        "Which of the folowing features are applicable regarding the conversion price?",
      options: [
        ["Conversion price is fixed throughout the life of the note", 0],
        ["Conversion price is not a constant", 14]
      ]
    },
    {
      question:
        "Which of the folowing features are applicable regarding the change of control (COC)?",
      options: [
        ["A COC is not expected before the note maturity", 4],
        [
          "A COC is expected before the note maturity and it has in impact on the conversion/redemption of the note",
          10
        ]
      ]
    }
  ]
};
