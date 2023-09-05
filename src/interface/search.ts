// Create a wrapper interface that includes the 'nonprofits' property
export interface NonprofitResponse {
  nonprofits: Nonprofit[];
}

// Update the 'Nonprofit' interface to represent a single nonprofit object
export interface Nonprofit {
  description?: string;
  ein: string;
  name: string;
  profileUrl: string;
  logoUrl?: string;
  coverImageUrl?: string;
  logoCloudinaryId?: string;
  matchedTerms: string[];
  slug: string;
  location?: string; // Made location optional to match the data
  tags?: string[]; // Made tags optional to match the data
}