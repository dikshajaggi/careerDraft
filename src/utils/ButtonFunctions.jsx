import pdfToText from "react-pdftotext";
import run from "./chat";

const prompt = `
You are an AI Resume Analysis Assistant. I will provide you with the full text of a resume (converted from PDF). First and foremost, determine if the provided document is ACTUALLY a resume. A resume typically includes sections like "About/Summary," "Skills," "Experience" (with job titles, companies, and dates), "Education," and optionally "Projects." It focuses on an individual's professional history and qualifications for employment.

If the document clearly follows this structure and contains information relevant to a job application, then proceed to analyze it as a resume based on the following criteria... [rest of your resume analysis prompt]

If the document does NOT resemble a resume in its structure and content (e.g., it's a report, an article, a news piece, etc.), then output the following JSON:

{
  "isResume": false,
  "analysisResult": "The provided document is not a resume and cannot be analyzed using resume-specific criteria."
} if yes then, Your task is to analyze the resume based on the following structure and criteria:

✅ Expected Section Order & Headings:
These are the expected sections (not all may be present), and the proper order they should follow:
1. About – (Optional) Should include name, title, and contact details.
2. Skills – Should be titled as "Skills", "Technical Skills", or "Key Skills".
3. Experience – Should be titled as "Experience", "Work Experience", or "Professional Experience".
4. Education – Should be listed in reverse chronological order (Masters, Graduation, School). Only one may be present or all. (Optional)
5. Projects – (Optional) Titled as "Projects", "Key Projects", or "Project Highlights".

📊 Scoring Metrics (Score out of 100):
Please analyze the resume and return a JSON object with the following structure:

{
  "finalScore": "78",
  "scoringBreakdown": {
    "properSectionOrder": { "marks": "8/10", "advice": "Minor deviation in the order of the About section." },
    "presenceOfRelevantSections": { "marks": "10/10", "advice": "All sections are present." },
    "skills": { "marks": "12/15", "advice": "Good skills but could be categorized better." },
    "experience": { "marks": "20/25", "advice": "Quantifiable achievements, but can be more concise." },
    "projects": { "marks": "0/15", "advice": "Projects section missing." },
    "readability": { "marks": "10/10", "advice": "Clear and readable formatting." },
    "atsFriendliness": { "marks": "18/15", "advice": "Excellent use of keywords and verbs." }
  },
  "sectionFeedback": {
    "about": "Concise, but could be better structured.",
    "skills": "Add categories like Programming, Tools, etc.",
    "experience": "Use bullet points, highlight impact.",
    "education": "Looks good and in reverse chronological order.",
    "projects": "Missing entirely. Please add some projects."
  },
  "sectionOrderValidation": {
    "isCorrect": false,
    "suggestedOrder": ["About", "Skills", "Experience", "Education", "Projects"]
  },
  "improvementTips": {
    "about": ["Keep it to 1-2 lines", "Include title, phone, email, LinkedIn"],
    "skills": ["Group into categories", "Use bullet points"],
    "experience": ["Use STAR method", "Be concise", "Highlight outcomes"],
    "projects": ["Add 2-3 key projects", "Use metrics if possible"]
  },
  "summary": {
    "overall": "Strong technical profile. Needs a projects section and tighter experience formatting.",
    "atsSuitability": "Highly ATS-friendly due to strong keyword and formatting."
  },
  "improvedResume": "<plain text version of improved resume here>"
}

📌 Output Instructions:
Please output the result ONLY as a raw JSON object.

DO NOT wrap it inside code blocks like \`\`\`json.
DO NOT include markdown or explanation.
The output must start with { and end with } — nothing else.
`;

function stripMarkdownCodeFence(markdownString) {
  return markdownString
    .replace(/^```json\s*/i, '')  // Remove opening fence with optional 'json'
    .replace(/```$/, '');         // Remove closing fence
}

export const handleUpload = async (file, setAnalyzed, setAnalysedResult, setIsLoading = () => {} ) => {
    const data = await extractText(file)
    console.log(data, "dat check")
    setIsLoading(true)
    const result = await run(`${data}. ${prompt}`)
    const removedMarkdown = stripMarkdownCodeFence(result)
    if(result) {
      setAnalysedResult(JSON.parse(removedMarkdown))
      console.log(JSON.parse(removedMarkdown), "JSON.parse(removedMarkdown)")
      setAnalyzed(true)
      setIsLoading(false)
    }
  }; 


//   JSON.parse() is a built-in JavaScript method that:

// Converts a JSON string into a JavaScript object.

  async function extractText(file) {
    const data = pdfToText(file)
      .then((text) => text)
      .catch((error) => console.error("Failed to extract text from pdf", error));
      return await data
  }