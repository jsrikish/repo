<App pageTitle='Welcome'>
        <Inpage>
          <InpageHeader>
            <InpageHeaderInner>
              <InpageHeadline>
                <InpageTitle>Smallsat Data Explorer</InpageTitle>
              </InpageHeadline>
            </InpageHeaderInner>
          </InpageHeader>
          <InpageBody>
            <InpageBodyInner>
              <Prose>
                <Subtitle
                  text='Search, discover, and access NASA acquired commercial
                    smallsat data.'
                />
                <Layout rows={1}>
                  <IntroBlock>
                    The Smallsat Data Explorer is being developed as part of{' '}
                    <a
                      href='https://earthdata.nasa.gov/esds/small-satellite-data-buy-program'
                      title='View CSDAP page'
                    >
                      NASA&apos;s Commercial Smallsat Data Acquisition (CSDA)
                      Program
                    </a>{' '}
                    to search, discover, and access commercial small satellite
                    (or smallsat) data that has been acquired by NASA.
                  </IntroBlock>
                </Layout>

                <Layout rows={2}>
                  <Paragraph>
                    The CSDA Program is committed to identifying and evaluating
                    commercial smallsat data that have the potential to support
                    NASA’s Earth science research and application activities.
                    Currently, this tool supports search, discovery, and access
                    to data from Planet Labs, Inc. and Spire Global, Inc.
                    acquired as part of the CSDA Program’s evaluation effort and
                    ongoing collaborations. Data access is restricted to
                    researchers of NASA-funded projects.{' '}
                    <strong>
                      Approved users can leverage this tool to query the current
                      archive over a specified date range by selecting or
                      uploading areas of interest (AOI).
                    </strong>
                  </Paragraph>

                  <Paragraph>
                    The CSDAP’s initial data evaluation phase also includes
                    products from Maxar Technologies, Inc. (formally
                    DigitalGlobe, Inc.). This data is currently available at the{' '}
                    <a
                      href='https://cad4nasa.gsfc.nasa.gov/'
                      title='View CAD4NASA page'
                    >
                      CAD4NASA
                    </a>{' '}
                    website. Once evaluation of these products is complete, data
                    acquired from Maxar Technologies, Inc. will be made
                    available through this tool. In addition, the CSDA Program
                    has an ongoing partnership with Teledyne Brown Engineering,
                    Inc. for access to DLR Earth Sensing Imaging Spectrometer
                    data which is available through the{' '}
                    <a
                      href='https://teledyne.tcloudhost.com/Account/Login'
                      title='View TCloud page'
                    >
                      TCloud
                    </a>{' '}
                    portal.
                  </Paragraph>

                  <Paragraph>
                    Additional information on the Commercial Smallsat Data
                    Acquisition Program, data availability and the technical
                    specifications of the commercial data can be found at the{' '}
                    <a
                      href='https://earthdata.nasa.gov/esds/small-satellite-data-buy-program'
                      title='View CSDAP page'
                    >
                      CSDAP Program
                    </a>{' '}
                    page.
                  </Paragraph>
                </Layout>
              </Prose>
            </InpageBodyInner>
          </InpageBody>
          <InpageBody grey>
            <InpageBodyInner>
              <Prose>
                <Title>How it works</Title>
                <Subtitle text='Get started with 3 easy steps.' />
                <Layout rows={1}>
                  <Step number={1} instruction='Register on Earthdata'>
                    <p>
                      Create an account on{' '}
                      <UnderlinedLink
                        href='https://earthdata.nasa.gov/'
                        title='View EARTHDATA page'
                      >
                        earthdata.nasa.gov
                      </UnderlinedLink>{' '}
                      to be able to log in on SmallSat Data Explorer. Login is
                      required to request data.
                    </p>
                  </Step>
                  <Step number={2} instruction='Become an approved user'>
                    <p>
                      Fill in a user approval request form and wait for an
                      administrator to approve your data access eligibility so
                      you can download requested data.
                    </p>
                    <UnderlinedLink
                      href='https://csdap.earthdata.nasa.gov/signup/'
                      title='Fill out the Form'
                    >
                      Fill out the form
                    </UnderlinedLink>
                  </Step>
                  <Step
                    number={3}
                    instruction='Explore data and place order requests'
                  >
                    <p>
                      Access to data requested is dependent on an
                      administrator&apos;s approval. After approval, an
                      administrator will provide download instructions.
                    </p>
                  </Step>
                </Layout>
              </Prose>
            </InpageBodyInner>
          </InpageBody>
        </Inpage>
      </App>
