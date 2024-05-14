"use client";

import React, { useCallback, useState } from 'react';

const Success = () => {
  return (
    <main className="p-4 max-w-3xl mx-auto">
      <hgroup className="mb-4">
        <h3 className="text-xl font-bold">回収依頼を受け付けました</h3>
        <p className="text-gray-600">
        近日中に弊社担当者から連絡があります
        </p>
      </hgroup>
    </main>
  );
};

export default Success;
