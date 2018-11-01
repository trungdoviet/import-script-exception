window.TPUR = window.TPUR || {}
window.TPUR.config = {
    host: ''
  , comboboxInfoURI: comboboxLink
  , calculatorURI: calculationLink
  , convertPayload: function(viewModal) {
      var payoutDate = viewModal.payoutDate.format('DD.MM.YYYY')
      return {
        bankCode: viewModal.bank,
        languageCode: 'en',
        dossier: {
          calculationBase: {
            businessCase: {
              businessCreationType: viewModal.businessCase
            },
            funding: {
              segment: viewModal.segment,
              propertyType: viewModal.typeOfProperty,
              rating: viewModal.rating,
              marketValue: viewModal.marketValue,
              mortgageAmount: viewModal.mortgageAmount,
              ratingAgency: viewModal.ratingAgency,
              business: viewModal.business,
              contributionMargin: viewModal.contributionMargin
            },
            financialCheck: {
              etpFeasibility: viewModal.etpFeasibility,
              violationMinRequirements: viewModal.violationMinimalRequirement
            }
          },
          product: {
            currentTranche: {
              productCode: viewModal.product,
              amountPiece: viewModal.amount,
              payOutDate: payoutDate,
              period: 2
            }
          },
          debtorManagement: {
            debtors: [
              {
                person: {
                  firstName: 'Christina',
                  lastName: 'Lange',
                  nationality: 'country-1'
                },
                address: {
                  zipCode: '70000',
                  city: 'HCM',
                  country: 'country-1'
                }
              }
            ]
          }
        }
      }
    }
}
