import { FormattedMessage } from "react-intl";

const Readings: React.FC<{}> = () => {
  return (
    <div className="container">
      <div className="panel readings">
        <header>
          <h2>
            <FormattedMessage
              id="Readings.title"
              defaultMessage="Readings"
              description="readings title"
            />
          </h2>
        </header>
        <div className="main">
          <div className="content cf">
            <ul>
              <li>
                Centre for Addiction and Mental Health. CAMH Suicide Prevention
                and Assessment Handbook. (2011). Retrieved January 28th, 2021,
                from http://www.antoniocasella.eu/salute/CAMH_2011.pdf{" "}
              </li>

              <li>
                Government of Canada. (2020). Suicide rates in Canada: Key
                Statistics. Retrieved January 30, 2021 from:
                https://www.canada.ca/en/public-health/services/publications/healthy-living/suicide-canada-key-statistics-infographic.html{" "}
              </li>

              <li>
                Oquendo, M., & Bernanke, J. (2017). Suicide risk assessment:
                tools and challenges. World Psychiatry, 16(1), 28–29.
                https://doi.org/10.1002/wps.20396{" "}
              </li>

              <li>
                Perlman CM, Neufeld E, Martin L, Goy M, & Hirdes JP (2011).
                Suicide Risk Assessment Inventory: A Resource Guide for Canadian
                Health care Organizations. Toronto, ON: Ontario Hospital
                Association and CanadianPatient Safety Institute.{" "}
              </li>

              <li>
                Roush, J., Brown, S., Jahn, D., Mitchell, S., Taylor, N.,
                Quinnett, P., & Ries, R. (2018). Mental Health Professionals’
                Suicide Risk Assessment and Management Practices. Crisis : the
                Journal of Crisis Intervention and Suicide Prevention, 39(1),
                55–64. https://doi.org/10.1027/0227-5910/a000478{" "}
              </li>

              <li>
                Sadek, J. (2018). A Clinician’s Guide to Suicide Risk Assessment
                and Management. Springer.
                https://doi.org/10.1007/978-3-319-77773-3{" "}
              </li>

              <li>
                Sadek, J., Pyche, M., Theriault, S., Delva, N., Chehil, S., &
                Pilon, D. (2020). A new suicide risk assessment tool in Nova
                Scotia, Canada. Clinical and Investigative Medicine (Online),
                43(1), E30-E34.{" "}
              </li>

              <li>
                The Canadian Patient Safety Institute & Mental Health Commission
                of Canada. (2021). Suicide Risk Assessment Toolkit: A Resource
                for Healthcare Workers and Organizations. Retrieved February
                1st, 2021, from
                https://www.mentalhealthcommission.ca/sites/default/files/2021-
                01/mhcc_cpsi_suicide_risk_assessment_toolkit_eng.pdf{" "}
              </li>

              <li>
                World Health Organization (2019, September 2). Suicide.
                Retrieved February 1st, 2021, from
                https://www.who.int/news-room/fact-sheets/detail/suicide{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readings;
