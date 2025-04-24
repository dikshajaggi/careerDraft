/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import ReactSpeedometer from 'react-d3-speedometer'
import { MainContext } from '../utils/MainContext'

const AnalysisResult = () => {
  const { analysedResult } = useContext(MainContext)

  const [isResume, setIsResume] = useState(true)
  const [score, setScore] = useState(0)
  const [improvements, setImprovements] = useState(null)
  const [sectionOrder, setSectionOrder] = useState([])
  const [isCorrectOrder, setIsCorrectOrder] = useState(false)
  const [breakdown, setBreakdown] = useState(null)
  const [sectionFeedback, setSectionFeedback] = useState(null)
  const [summary, setSummary] = useState(null)

  useEffect(() => {
    if (analysedResult) {
      setScore(parseInt(analysedResult.finalScore))
     if (analysedResult.isResume === false) {
      setIsResume(false) 
      setScore(0)
      setSummary(analysedResult.analysisResult)
      setSectionOrder("Not a resume")
      isCorrectOrder(false)
     }
      setIsCorrectOrder(analysedResult.sectionOrderValidation?.isCorrect)
      setSectionOrder(analysedResult.sectionOrderValidation?.suggestedOrder)
      setImprovements(analysedResult.improvementTips)
      setBreakdown(analysedResult.scoringBreakdown)
      setSectionFeedback(analysedResult.sectionFeedback)
      setSummary(analysedResult.summary)
    }
  }, [analysedResult])

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-10 dark:text-dark-text dark:bg-dark-bg">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Resume Analysis Result</h2>
      <p className="text-gray-600 text-center mb-10">
        Here's a breakdown of your resume's performance and personalized recommendations.
      </p>

      {/* Score Gauge */}
      <div className="flex justify-center mb-10">
        <ReactSpeedometer
          maxValue={100}
          value={score}
          needleColor="steelblue"
          startColor="red"
          segments={5}
          endColor="green"
          height={200}
          width={300}
          currentValueText={`Score: ${score}/100`}
        />
      </div>

      {/* Summary Section */}
      {summary && (
        <div className="bg-blue-50 rounded-xl shadow p-6 mb-10">
          <h3 className="text-2xl font-semibold mb-3">📝 Summary</h3>
          <p className="text-gray-700 mb-2"><strong>Overall:</strong> {summary.overall}</p>
          <p className="text-gray-700"><strong>ATS Suitability:</strong> {summary.atsSuitability}</p>
        </div>
      )}

      {/* Scoring Breakdown */}
      {breakdown && (
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <h3 className="text-2xl font-semibold mb-4">📊 Scoring Breakdown</h3>
          <ul className="space-y-4">
            {Object.entries(breakdown).map(([key, value]) => (
              <li key={key} className="border-b pb-2">
                <p className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                <p className="text-sm text-gray-600">Marks: {value.marks}</p>
                <p className="text-sm text-gray-700">Advice: {value.advice}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Section Feedback */}
      {sectionFeedback && (
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <h3 className="text-2xl font-semibold mb-4">📌 Section Feedback</h3>
          <ul className="space-y-3">
            {Object.entries(sectionFeedback).map(([section, feedback]) => (
              <li key={section}>
                <p><span className="font-medium capitalize">{section}:</span> {feedback}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Improvements */}
      {improvements && (
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <h3 className="text-2xl font-semibold mb-4">🛠️ Section-wise Improvements</h3>
          <div className="space-y-6">
            {Object.entries(improvements).map(([section, suggestions]) => (
              <div key={section}>
                <h4 className="text-xl font-semibold text-primary capitalize mb-2">{section}</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {suggestions.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section Order Validation */}
      <div className={`rounded-lg px-6 py-4 mb-10 ${isCorrectOrder ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
        <h4 className="text-lg font-medium mb-1">{isResume ? "Section Order" : "Insights"}</h4>
        <p>{isCorrectOrder
          ? "✅ Your resume sections are in the correct order." :
          isResume ? `⚠️ Recommended order: ${sectionOrder?.join(', ')}` :"⚠️Not a Resume"}</p>
      </div>

      {/* Download Button */}
      <div className="flex justify-center">
        <button
          className="bg-primary hover:bg-primary-hover cursor-pointer text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-300"
          onClick={() => {
            const blob = new Blob([analysedResult.improvedResume], { type: 'text/plain' })
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = 'Improvements.txt'
            a.click()
            window.URL.revokeObjectURL(url)
          }}
        >
          Download File with Improvements
        </button>
      </div>
    </div>
  )
}

export default AnalysisResult

// const blob = new Blob([analysedResult.improvedResume], { type: 'text/plain' })
// Blob = Binary Large Object. It lets you hold data (text, images, files, etc.) in memory.

// Here, it's taking the resume string (which is just plain text) and wrapping it into a Blob so it can be treated like a file.

// { type: 'text/plain' } tells the browser it's plain text (like a .txt file).

// const url = window.URL.createObjectURL(blob)
// This turns the blob into a temporary URL (like a file link), so the browser can point to it.

// It's like saying: "Hey browser, treat this blob like it's a downloadable file for a moment."

// Creates an invisible <a> link, sets the href to our blob URL.

// download attribute tells the browser: "Download this instead of opening it."

// Then .click() programmatically clicks the link so the file gets downloaded automatically.

// window.URL.revokeObjectURL(url)
// This is cleanup. After the file has started downloading, we don't need that temporary blob URL anymore, so we tell the browser: "Hey, you can release this memory now."