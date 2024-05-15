"use client";

import React, { useCallback, useState } from 'react';
import RequesterForm from '@/features/index/RequesterForm';
import RequestForm from '@/features/index/RequestForm';
import { useRouter } from 'next/navigation';
import { Schema, schema } from '@/features/index/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '@/features/index/components/Button/component';

const Index = () => {
  const [submitting, setSubmit] = useState<boolean>(false)
  const form = useForm<Schema>({
    resolver: zodResolver(schema)
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form
  
  const router = useRouter();

  const onSubmit = async (schema: Schema) => {
    try {
      setSubmit(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_POSTER_API_URL}/api/external_scrap_collection_requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-POSTER-API-KEY': process.env.NEXT_PUBLIC_POSTER_API_KEY as string
        },
        body: JSON.stringify({ data: schema })
      });

      if (response.ok) {
        setSubmit(false)
        console.log('Form submitted successfully');
        router.push('/success')
      } else {
        setSubmit(false)
        console.error('Form submission error');
        alert('引取依頼に失敗しました(1)')
      }
    } catch (error) {
      setSubmit(false)
      console.error('An error occurred:', error);
      alert('引取依頼に失敗しました(2)')
    }
  };

  return (
    <main className="p-4 max-w-3xl mx-auto">
      <hgroup className="mb-4">
        <h3 className="text-xl text-gray-700 font-bold">回収依頼フォーム</h3>
        <p className="text-gray-500">
          お問い合わせフォームをご利用の際は、必ず下記「個人情報保護方針」をご一読ください。内容に同意していただけましたら、下記フォームに必要事項をご入力の上、「依頼を送信する」ボタンを押してください。なお、ご依頼内容によってはご返答が遅れる場合がございます。ご了承ください。
        </p>
      </hgroup>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...form}>
            <RequestForm />
            <hr className="mt-4 mb-4" />
            <RequesterForm />
            <div className="flex items-center gap-2 mb-4">
              <input type='checkbox' {...register('agree_privacy_policy')} />
              <span>
                <a href="https://google.com" className="text-blue-500 hover:underline">個人情報保護方針</a>に同意する
              </span>
              {errors['agree_privacy_policy'] && <p className="text-red-500 text-xs italic">{errors['agree_privacy_policy'].message as string}</p>}
            </div>
            <Button type='submit' disabled={submitting}>依頼を送信する</Button>
          </FormProvider>
        </form>
      </div>
    </main>
  );
};

export default Index;
