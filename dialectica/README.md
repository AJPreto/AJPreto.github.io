# Dialectica

Dialectica is a design for an agent that transforms natural language into
structured logical blocks before downstream prompting, retrieval, and
embedding.

The goal is not to force language into brittle formal logic. The goal is to
produce a stable intermediate representation that is:

- expressive enough to capture reasoning structure
- soft enough to preserve ambiguity and uncertainty
- machine-friendly enough for retrieval, planning, and synthesis

## Core idea

Instead of embedding only raw user text, Dialectica creates a two-layer
representation:

1. Natural language input
2. Logical block graph

The logical block graph is then used in two ways:

- as a prompt intermediate layer for downstream agents
- as a canonical representation to embed and index

## Why this helps

Raw text embeddings often blur distinctions that matter for reasoning:

- goals vs constraints
- claims vs evidence
- conditions vs outcomes
- negation
- exceptions
- uncertainty

Dialectica makes those distinctions explicit.

## Design principles

### 1. Typed semantics over rigid formalism

Dialectica should start as a typed semantic graph, not pure symbolic logic.
Natural language is too ambiguous for a strict first-order pipeline to work
reliably in most real settings.

### 2. Faithfulness over precision

If the source text is vague, the representation should stay vague. The parser
must be able to emit uncertainty and ambiguity instead of inventing a clean but
incorrect structure.

### 3. Hybrid retrieval

Store and compare:

- the original text
- the canonicalized logical representation
- optional block-level embeddings

This lets the system benefit from both semantic similarity and explicit
reasoning structure.

### 4. Decomposability

The smallest useful unit is a block. A single utterance may yield many blocks
and many relations.

## System components

### Parser

Transforms natural language into structured blocks and relations.

Input:

- raw utterance or document span

Output:

- `LogicalForm` JSON object

### Canonicalizer

Normalizes parser output into a stable ordering and serialization so semantically
equivalent outputs are more likely to compare well.

Examples:

- normalize block ordering
- deduplicate repeated entities
- standardize relation direction
- preserve unresolved ambiguity explicitly

### Embedder

Creates embeddings from one or more of:

- source text
- canonical logical serialization
- per-block text

### Retriever

Supports queries over:

- text similarity
- logic similarity
- relation-aware subgraph matches

### Downstream agent

Consumes both the original user text and the parsed logical structure for:

- planning
- constrained answering
- contradiction checking
- memory retrieval
- prompt construction

## Minimal schema

The first version of Dialectica should support:

- `claim`
- `goal`
- `constraint`
- `condition`
- `outcome`
- `evidence`
- `definition`
- `question`
- `exception`
- `unknown`
- `ambiguity`

And relations such as:

- `supports`
- `contradicts`
- `implies`
- `depends_on`
- `defines`
- `qualifies`
- `unless`
- `answers`

See [logical-blocks.schema.json](/c:/Users/marti/Documents/GitHub/portfolio/dialectica/schema/logical-blocks.schema.json).

## Example

Input:

`If the battery is dead, the car will not start unless we jump it.`

Output:

```json
{
  "source_text": "If the battery is dead, the car will not start unless we jump it.",
  "blocks": [
    {
      "id": "b1",
      "type": "condition",
      "text": "the battery is dead"
    },
    {
      "id": "b2",
      "type": "outcome",
      "text": "the car will not start",
      "polarity": "negative"
    },
    {
      "id": "b3",
      "type": "exception",
      "text": "we jump it"
    }
  ],
  "relations": [
    {
      "type": "implies",
      "source": "b1",
      "target": "b2"
    },
    {
      "type": "unless",
      "source": "b3",
      "target": "b2"
    }
  ]
}
```

## Suggested first build

The fastest path to a working prototype is:

1. Define the schema
2. Create a parser prompt that emits strict JSON
3. Canonicalize the JSON
4. Serialize the canonical form into text
5. Embed both raw text and canonical serialization
6. Compare hybrid retrieval quality on a small benchmark set

## V1 architecture

```text
User text
  -> Parser LLM
  -> LogicalForm JSON
  -> Canonicalizer
  -> Canonical serialization
  -> Embeddings
  -> Vector store

Query
  -> Parser LLM
  -> LogicalForm JSON
  -> Canonical serialization
  -> Hybrid retrieval
  -> Downstream agent
```

## Practical V1 constraints

Dialectica should not try to solve full formal reasoning in version one.
Instead, version one should aim to be useful for:

- decomposing prompts
- retrieving relevant prior reasoning
- surfacing contradictions
- carrying forward explicit constraints

## Next implementation steps

- Create a benchmark set of 25 to 50 varied utterances
- Implement parser prompt and JSON validation
- Implement canonical serialization
- Add embedding and retrieval experiments
- Measure whether logical retrieval beats text-only retrieval for selected tasks
