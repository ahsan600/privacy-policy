/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Shield, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME
  const privacyDate =
    process.env.NEXT_PUBLIC_PRIVACY_EFFECTIVE_DATE 
  const supportEmail =
    process.env.NEXT_PUBLIC_SUPPORT_EMAIL 
  const theme = process.env.NEXT_PUBLIC_THEME_COLOR || "indigo";

  const thirdPartyServices = [
    {
      name: "AdMob",
      link: "https://support.google.com/admob/answer/6128543?hl=en",
    },
    { name: "Unity", link: "https://unity3d.com/legal/privacy-policy" },
  ];

  // Inline styles for theme color
  const heroStyle = {
    background: `linear-gradient(135deg, #1e293b 0%, #0f172a 100%)`,
  };

  const buttonStyle = {
    backgroundColor: "#ffffff",
    color: "#1e293b",
  };

  const accentStyle = {
    backgroundColor: getThemeColor(theme),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative overflow-hidden" style={heroStyle}>
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: getThemeColor(theme) }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: getThemeColor(theme, 0.5) }}
          ></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center text-white">
          <div className="mx-auto mb-8 w-24 h-24 flex items-center justify-center rounded-3xl bg-white  text-black bg-opacity-10 backdrop-blur-xl border border-white border-opacity-20 shadow-2xl">
            <Shield className="w-12 h-12" />
          </div>

          <h1 className="text-6xl sm:text-7xl font-black mb-6 tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
            This privacy policy applies to{" "}
            <span className="font-bold text-white">{companyName}</span> services
            across apps, websites, and other platforms.
          </p>

          <div className="inline-flex items-center gap-3 bg-white bg-opacity-10 backdrop-blur-2xl px-8 py-4 rounded-full border border-white border-opacity-20 shadow-2xl mb-10">
            <div
              className="w-2.5 h-2.5 rounded-full animate-pulse"
              style={accentStyle}
            ></div>
            <span className="text-sm font-semibold tracking-wide text-black">
              Effective Date: {privacyDate}
            </span>
          </div>

          <div className="mt-12">
            <a
              href="#main-content"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={buttonStyle}
            >
              Read Policy
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="max-w-5xl mx-auto px-6 py-16 space-y-10"
        id="main-content"
      >
        {/* Information Collection */}
        <PolicySection title="Information Collection and Use" theme={theme}>
          <p className="text-gray-700 leading-relaxed">
            The Application collects information when you download and use it.
            This information may include:
          </p>
          <ul
            className="mt-4 space-y-3 pl-6"
            style={{ borderLeft: `4px solid ${getThemeColor(theme, 0.3)}` }}
          >
            <li className="flex items-start gap-3">
              <span
                className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: getThemeColor(theme) }}
              ></span>
              <span className="text-gray-700">
                Your device's Internet Protocol address (e.g. IP address)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: getThemeColor(theme) }}
              ></span>
              <span className="text-gray-700">
                The pages of the Application that you visit, the time and date
                of your visit, the time spent on those pages
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: getThemeColor(theme) }}
              ></span>
              <span className="text-gray-700">
                The time spent on the Application
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: getThemeColor(theme) }}
              ></span>
              <span className="text-gray-700">
                The operating system you use on your mobile device
              </span>
            </li>
          </ul>
          <div
            className="mt-6 p-4 rounded-r-lg text-gray-700"
            style={{
              backgroundColor: `${getThemeColor(theme)}15`,
              borderLeft: `4px solid ${getThemeColor(theme)}`,
            }}
          >
            The Application does not gather precise information about the
            location of your mobile device.
          </div>
          <p className="mt-6 text-gray-700 leading-relaxed">
            The Application collects your device's location, which helps the
            Service Provider determine your approximate geographical location
            and make use of it in the following ways:
          </p>
          <div className="mt-4 space-y-4">
            <InfoCard title="Geolocation Services:" theme={theme}>
              The Service Provider utilizes location data to provide features
              such as personalized content, relevant recommendations, and
              location-based services.
            </InfoCard>
            <InfoCard title="Analytics and Improvements:" theme={theme}>
              Aggregated and anonymized location data helps the Service Provider
              to analyze user behavior, identify trends, and improve the overall
              performance and functionality of the Application.
            </InfoCard>
            <InfoCard title="Third-Party Services:" theme={theme}>
              Periodically, the Service Provider may transmit anonymized
              location data to external services. These services assist them in
              enhancing the Application and optimizing their offerings.
            </InfoCard>
          </div>
          <p className="mt-6 text-gray-700 leading-relaxed">
            The Service Provider may use the information you provided to contact
            you from time to time to provide you with important information,
            required notices, and marketing promotions.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            For a better experience, while using the Application, the Service
            Provider may require you to provide certain personally identifiable
            information. The information requested will be retained and used as
            described in this privacy policy.
          </p>
        </PolicySection>

        {/* Third Party Access */}
        <PolicySection title="Third Party Access" theme={theme}>
          <p className="text-gray-700 leading-relaxed">
            Only aggregated, anonymized data is periodically transmitted to
            external services to aid the Service Provider in improving the
            Application and their service. The Service Provider may share your
            information with third parties as described below:
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Please note that the Application utilizes third-party services that
            have their own Privacy Policy:
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {thirdPartyServices.map((svc, idx) => (
              <a
                key={idx}
                href={svc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 border hover:shadow-md"
                style={{
                  backgroundColor: `${getThemeColor(theme)}15`,
                  color: getThemeColor(theme),
                  borderColor: `${getThemeColor(theme)}30`,
                }}
              >
                {svc.name}
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ))}
          </div>
          <p className="mt-6 text-gray-700 leading-relaxed">
            The Service Provider may disclose User Provided and Automatically
            Collected Information:
          </p>
          <ul
            className="mt-4 space-y-3 pl-6"
            style={{ borderLeft: `4px solid ${getThemeColor(theme, 0.3)}` }}
          >
            <li className="flex items-start gap-3">
              <span
                className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: getThemeColor(theme) }}
              ></span>
              <span className="text-gray-700">
                As required by law, such as to comply with a subpoena, or
                similar legal process;
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: getThemeColor(theme) }}
              ></span>
              <span className="text-gray-700">
                When they believe in good faith that disclosure is necessary to
                protect their rights, protect your safety or the safety of
                others, investigate fraud, or respond to a government request;
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: getThemeColor(theme) }}
              ></span>
              <span className="text-gray-700">
                With trusted service providers who work on their behalf, do not
                have an independent use of the information, and have agreed to
                adhere to the privacy rules.
              </span>
            </li>
          </ul>
        </PolicySection>

        {/* Opt-Out Rights */}
        <PolicySection title="Opt-Out Rights" theme={theme}>
          <p className="text-gray-700 leading-relaxed">
            You can stop all collection of information by the Application easily
            by uninstalling it. You may use the standard uninstall processes as
            may be available as part of your mobile device or via the mobile
            application marketplace or network.
          </p>
        </PolicySection>

        {/* Data Retention Policy */}
        <PolicySection title="Data Retention Policy" theme={theme}>
          <p className="text-gray-700 leading-relaxed">
            The Service Provider will retain User Provided data for as long as
            you use the Application and for a reasonable time thereafter. To
            request deletion, contact:{" "}
            <a
              href={`mailto:${supportEmail}`}
              className="font-semibold underline transition-colors"
              style={{ color: getThemeColor(theme) }}
            >
              {supportEmail}
            </a>
            .
          </p>
        </PolicySection>

        {/* Children */}
        <PolicySection title="Children" theme={theme}>
          <p className="text-gray-700 leading-relaxed">
            The Service Provider does not use the Application to knowingly
            solicit data from or market to children under the age of 13. The
            Application does not address anyone under the age of 13. The Service
            Provider does not knowingly collect personally identifiable
            information from children under 13 years of age. If a child under 13
            has provided personal information, it will be immediately deleted.
            Parents may contact the Service Provider at{" "}
            <a
              href={`mailto:${supportEmail}`}
              className="font-semibold underline transition-colors"
              style={{ color: getThemeColor(theme) }}
            >
              {supportEmail}
            </a>{" "}
            for necessary actions.
          </p>
        </PolicySection>

        {/* Security */}
        <PolicySection title="Security" theme={theme}>
          <p className="text-gray-700 leading-relaxed">
            The Service Provider safeguards the confidentiality of your
            information with physical, electronic, and procedural measures.
          </p>
        </PolicySection>

        {/* Changes */}
        <PolicySection title="Changes" theme={theme}>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy may be updated from time to time. The Service
            Provider will notify you of any changes by updating this page.
            Continued use signifies approval of all changes.
          </p>
        </PolicySection>

        {/* Your Consent */}
        <PolicySection title="Your Consent" theme={theme}>
          <p className="text-gray-700 leading-relaxed">
            By using the Application, you consent to the processing of your
            information as set forth in this Privacy Policy now and as amended.
          </p>
        </PolicySection>

        {/* Contact Us */}
        <PolicySection
          title="Contact Us"
          icon={<Mail className="w-6 h-6" />}
          theme={theme}
        >
          <p className="text-gray-700 leading-relaxed">
            If you have any questions regarding privacy while using the
            Application, contact the Service Provider via email at{" "}
            <a
              href={`mailto:${supportEmail}`}
              className="font-semibold underline transition-colors"
              style={{ color: getThemeColor(theme) }}
            >
              {supportEmail}
            </a>
            .
          </p>
        </PolicySection>
      </div>

      {/* Footer */}
      <footer className="relative overflow-hidden mt-20" style={heroStyle}>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 right-1/4 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: getThemeColor(theme) }}
          ></div>
        </div>

        <div className="relative py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center  justify-center rounded-xl bg-white bg-opacity-10 backdrop-blur-xl border border-white border-opacity-20">
                  <Shield className="w-5 h-5 text-black" />
                </div>
                <span className="text-xl font-bold text-white">
                  {companyName}
                </span>
              </div>

              <div className="flex gap-6 text-sm">
                <a
                  href="#main-content"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>

                <a
                  href={`mailto:${supportEmail}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="h-px bg-white bg-opacity-10 mb-8"></div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-gray-400">
                © {new Date().getFullYear()} {companyName}. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Built with care for your privacy and security
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper function to get theme colors
function getThemeColor(theme: string, opacity: number = 1): string {
  const colors: Record<string, string> = {
    indigo: "#6366f1",
    blue: "#3b82f6",
    purple: "#a855f7",
    pink: "#ec4899",
    red: "#ef4444",
    orange: "#f97316",
    yellow: "#eab308",
    green: "#22c55e",
    teal: "#14b8a6",
    cyan: "#06b6d4",
  };

  const hex = colors[theme] || colors.indigo;

  if (opacity === 1) return hex;

  // Convert hex to rgba
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

// Section component
function PolicySection({ title, children, icon, theme }: any) {
  const borderColor = getThemeColor(theme, 0.2);
  const titleColor = getThemeColor(theme);

  return (
    <div
      className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-8 mb-8"
      style={{ borderWidth: "2px", borderColor }}
    >
      <div className="flex items-center gap-3 mb-6">
        {icon && <div style={{ color: titleColor }}>{icon}</div>}
        <h2
          className="text-3xl font-extrabold tracking-tight"
          style={{ color: titleColor }}
        >
          {title}
        </h2>
      </div>
      <div className="prose prose-gray max-w-none">{children}</div>
    </div>
  );
}

// Info card component
function InfoCard({ title, children, theme }: any) {
  const bgColor = `${getThemeColor(theme)}08`;
  const borderColor = getThemeColor(theme, 0.2);
  const titleColor = getThemeColor(theme);

  return (
    <div
      className="p-5 rounded-xl border shadow-sm"
      style={{ backgroundColor: bgColor, borderColor }}
    >
      <h4 className="font-bold mb-2" style={{ color: titleColor }}>
        {title}
      </h4>
      <p className="text-gray-700 text-sm">{children}</p>
    </div>
  );
}
