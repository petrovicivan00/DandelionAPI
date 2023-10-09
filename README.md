Certainly! Here's a README file text for your GitHub project based on the provided project specification:

---

# Text Analytics Web Application

## Overview

This project involves creating a web application that allows users to analyze text using the [Dandelion API](https://dandelion.eu/). The application supports four main text analysis tools provided by Dandelion:

1. **Entity Extraction:** Identifies key entities in a text, such as places, famous personalities, brands, events, etc.

2. **Text Similarity:** Calculates the semantic similarity between two texts.

3. **Language Detection:** Determines the language of a given text.

4. **Sentiment Analysis:** Analyzes the sentiment of a text.

## Getting Started

To use the Dandelion API, you need to register and obtain an API token from [Dandelion](https://dandelion.eu/). Once registered, you will find your API token on the dashboard page. This token must be included as a query parameter named "token" in API requests.

## Features

- **Token Configuration:** Users can input and update their API token through a dedicated configuration page. The token is stored in the browser to avoid re-entering it each time the application is opened.

- **Navigation Menu:** The application includes a navigation menu with four additional pages for each of the supported tools: Entity Extraction, Text Similarity, Language Detection, and Sentiment Analysis. Access to these pages is restricted if a valid token is not set.

### Entity Extraction

- Allows users to find entities within a provided text.
- Supports optional parameters:
  - "min_confidence" as a slider (ranging from 0 to 1) to set the confidence threshold for accepted entities.
  - "include" as checkboxes for selecting one or more values (image, abstract, categories).
- Displays extracted entities and, if selected, images and abstracts associated with each entity.

### Text Similarity

- Enables users to compare two texts for semantic similarity.
- Provides two text input fields and a submit button.
- Displays the similarity score between the provided texts.

### Language Detection

- Allows users to detect the language of a given text.
- Includes an optional "clean" checkbox to indicate whether the text should be cleaned of links, email addresses, and hashtags before processing.
- Displays the detected languages along with confidence levels.

### Sentiment Analysis

- Performs sentiment analysis on a given text.
- Supports an optional "lang" parameter for specifying the language (options: en, it, auto).
- Displays the sentiment score on a scale from -1 to 1 and labels it as "positive," "neutral," or "negative" with corresponding colors (interpolated between red and green).

### API Call History

- Records each API call made to the Dandelion API, including the URL, date, and time.
- Users can access the call history through the "history" menu item.
- The call history is cleared upon refreshing the page.

## Technical Requirements

- The web application is designed as a single-page application using the Angular frontend framework.
- The use of CSS libraries for aesthetics is optional, as the focus is on functionality.

## Development

To run the development server, use the following command:

```
ng serve
```

Navigate to `http://localhost:4200/` in your browser to access the application.

## Building

To build the project, use the following command:

```
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Testing

You can run unit tests using Karma:

```
ng test
```

For end-to-end testing, use:

```
ng e2e
```

## Further Help

For more information on using the Angular CLI, you can run:

```
ng help
```

Or refer to the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
