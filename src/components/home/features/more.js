import React from 'react'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap'
import flatten from 'flat'
import { IntlProvider, FormattedMessage } from 'react-intl'

const MoreFeatures = ({ locale, i18nMessages }) => (
  <IntlProvider locale={locale} messages={flatten(i18nMessages)}>
    <div>
      {i18nMessages.features.map((feature, index) => {
        return (
          <div style={{ marginBottom: '1rem' }} key={`feature-${index}`}>
            <Button
              outline
              block
              color='primary'
              id={`features-toggler-${index}`}
              style={{ marginBottom: '1rem' }}
            >
              <FormattedMessage id={`features.${index}.section`} />
            </Button>
            <UncontrolledCollapse toggler={`#features-toggler-${index}`}>
              <Card>
                <CardBody>
                  <ul>
                    {i18nMessages.features[index].elements.map(
                      (element, subIndex) => {
                        return (
                          <li key={`features-${index}-elements-${subIndex}`}>
                            <FormattedMessage
                              id={`features.${index}.elements.${subIndex}`}
                            />
                          </li>
                        )
                      }
                    )}
                  </ul>
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </div>
        )
      })}
    </div>
  </IntlProvider>
)

export default MoreFeatures
