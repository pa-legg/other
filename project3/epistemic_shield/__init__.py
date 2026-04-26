"""Epistemic Shield prototype package."""

from .core import (
    Document,
    FirewallDecision,
    FirewallPolicy,
    decide,
    documents_from_records,
    retrieve,
)

__all__ = [
    "Document",
    "FirewallDecision",
    "FirewallPolicy",
    "decide",
    "documents_from_records",
    "retrieve",
]
