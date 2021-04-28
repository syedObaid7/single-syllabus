import React, { Component } from "react";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../SE.pdf";

const Preview = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  /*When document gets loaded successfully*/
  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log("Loaded");
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <>
      <div className="main">
        <h1>Preview</h1>
        <div id="pdf">
          <Document
            file={pdf}
            onSourceError={(error) =>
              alert("Error while retrieving document source! " + error.message)
            }
            onLoadError={(error) =>
              alert("Error while loading document! " + error.message)
            }
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
        <div id="pageButtons">
          <div className="pagec">
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </div>
          <div className="buttonc">
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
              className="Pre"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Test = () => {
  return <h1>"hi"</h1>;
};
export default Preview;
